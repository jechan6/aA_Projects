require "sqlite3"
require "singleton"

class QuestionsDatabase < SQLite3::Database
  include Singleton
  
  def initialize
   super('questions.db')
   self.type_translation = true
   self.results_as_hash = true
  end
 
end 

class Users
  attr_accessor :fname, :lname
  attr_reader :id

  def self.find_by_id(id)
    data = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        users
      WHERE
        id = ?
    SQL
    return nil unless data.length > 0
    return Users.new(data.first) 
  end 
  
  def self.find_by_name(fname, lname)
    user = QuestionsDatabase.instance.execute(<<-SQL, fname, lname)
      SELECT 
        *
      FROM
        users
      WHERE 
        fname = ? AND 
        lname = ?
    SQL
    
  end 
  
  def initialize(options)
    @id = options['id']
    @fname = options['fname']
    @lname = options['lname']
  end
  
  def create 
    raise "#{self} already in database" if @id
    QuestionsDatabase.instance.execute(<<-SQL, @fname, @lname)
      INSERT INTO
        users (fname, lname)
      VALUES
        (?, ?)
    SQL
    
    @id = QuestionsDatabase.instance.last_insert_row_id
  end 
  
  def authored_questions
    author_questions = Questions.find_by_author_id(@id)
  end 
  
  def authored_replies 
    authored_replies = Reply.find_by_question_id(@id)
  end 
  
  def followed_questions 
    followed_questions = QuestionFollows.followed_questions_for_user_id(@id)
  end 
  
  def liked_questions 
    QuestionLikes.liked_questions_for_user_id(@id)
  end 
  
  def average_karma
    questions_authored = authored_questions
    QuestionsDatabase.instance.execute(<<-SQL, @id)
    
      SELECT
        *, COUNT(DISTINCT(question_likes.id))
      FROM
        questions
      LEFT JOIN
        question_likes
      ON
        questions.id = question_likes.question_id
      WHERE
        quesitons.author_id = ?
    SQL

    
    # SELECT *, COUNT(DISTINCT(question_likes.id)) FROM questions LEFT JOIN question_likes
    # ON questions.id  = question_likes.question_id
    # WHERE questions.author_id = 1;
    
  end
end 

class Questions 
  attr_accessor :title, :body
  attr_reader :author_id, :id 
  
  def self.find_by_id(id)
    question  = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        questions
      WHERE
        id = ?
    SQL

    return nil unless question.length > 0
    Questions.new(question.first)
  end
  
  def self.find_by_author_id(author_id)
    question  = QuestionsDatabase.instance.execute(<<-SQL, author_id)
      SELECT
        *
      FROM
        questions
        
      WHERE
        author_id = ?
    SQL

    return nil unless question.length > 0
    
    question.map {|el| Questions.new(el)}
  end
  
  def self.most_followed(n)
    QuestionFollows.most_followed_questions(n)
  end 
  
  def self.most_liked(n)
    QuestionLikes.most_liked_questions(n)
  end
  
  def initialize(options)
    @id = options['id']
    @title = options['title']
    @body = options['body']
    @author_id = options['author_id']
  end 
  
  def create 
    raise "#{self} already in database" if @id
    QuestionsDatabase.instance.execute(<<-SQL, @title, @body, @author_id)
      INSERT INTO
        questions(title, body, author_id)
      VALUES
        (?, ?, ?)
    SQL
    @id = QuestionsDatabase.instance.last_insert_row_id
  end
  
  def author 
    author  = QuestionsDatabase.instance.execute(<<-SQL, @author_id)
      SELECT
        *
      FROM
        users
      WHERE
        users.id = ?
    SQL
  end
  
  def replies 
    replies = Reply.find_by_question_id(@id)
  end 
  
  def followers 
    QuestionFollows.followers_for_question_id(@id)
  end 
  
  def likers 
    QuestionFollows.likers_for_question_id(@id)
  end 
  
  def num_likes 
    QuestionFollows.num_likes_for_question_id(@id)
  end 
  
end

class QuestionFollows
  attr_reader :user_id, :question_id
  
  def self.followers_for_question_id(question_id)
    
    users = QuestionsDatabase.instance.execute(<<-SQL,question_id)
      SELECT 
        *
      FROM 
        users
      JOIN question_follows
        ON users.id = question_follows.user_id
      WHERE question_id = ?
    
    SQL
    return nil unless users.length > 0
    users.map{|el| Users.new(el)}
    
  end 
  
  def self.followed_questions_for_user_id(user_id)
    
    questions = QuestionsDatabase.instance.execute(<<-SQL, user_id)
      SELECT 
        *
      FROM 
        questions
      JOIN question_follows
        ON questions.author_id = question_follows.user_id
      WHERE question_follows.user_id = ?
    SQL
    
    return nil unless questions.length > 0
    questions.map{|el| Questions.new(el)}

  end 

  def self.most_followed_questions(n)
    questions = QuestionsDatabase.instance.execute(<<-SQL, n)
      SELECT
        *
      FROM 
        questions 
      JOIN question_follows 
        ON questions.id = question_follows.question_id
      GROUP BY 
        question_follows.question_id 
      ORDER BY 
        COUNT(user_id) DESC
      LIMIT ? 
    SQL
    
    return nil unless questions.length > 0
    questions.map{|el| Questions.new(el)}
  end 
  
  def initialize(options)
    @user_id = options['user_id']
    @question_id = options['question_id']
  end
  
  def create
    raise "#{self} already in database" if @user_id
    QuestionsDatabase.instance.execute(<<-SQL, @user_id, @question_id)
      INSERT INTO
        question_follows(user_id, question_id)
      VALUES
        (?, ?)
    SQL
    
    @id = QuestionsDatabase.instance.last_insert_row_id
  end
  
end

class Reply 
  attr_accessor :body
  attr_reader :question_id, :id, :parent_id, :user_id
  
  def initialize(options)
    @question_id = options['question_id']
    @parent_id = options['parent_id']
    @user_id = options['user_id']
    @body = options['body']
  end
  
  def create 
    raise "#{self} already in database" if @id
    QuestionsDatabase.instance.execute(<<-SQL, @question_id, @parent_id, @user_id, @body)
      INSERT INTO
        replies_reply(question_id, parent_id, user_id, body)
      VALUES
        (?, ?, ?, ?)
    SQL
    @id = QuestionsDatabase.instance.last_insert_row_id
  end
  
  def author 
    author  = QuestionsDatabase.instance.execute(<<-SQL, @user_id)
      SELECT
        *
      FROM
        users
      WHERE
        users.id = ?
    SQL
    
    return nil unless author.length > 0
    Users.new(author.first)
  end 
  
  def question
    question = QuestionsDatabase.instance.execute(<<-SQL, @question_id)
      SELECT
        *
      FROM
        questions
      WHERE
        questions.id = ?
    SQL
    
    return nil unless question.length > 0
    Questions.new(question.first)
  end
  
  def parent_reply
    reply = QuestionsDatabase.instance.execute(<<-SQL, @parent_id)
      SELECT
        *
      FROM
        replies
      WHERE
        replies.id = ?
    SQL
    
    return nil unless reply.length > 0
    Reply.new(reply.first)
  end
  
  def child_reply
    reply = QuestionsDatabase.instance.execute(<<-SQL, @id)
      SELECT
        *
      FROM
        replies
      WHERE
        replies.parent_id = ?
    SQL
    
    return nil unless reply.length > 0
    Reply.new(reply.first)
  end
  
end 

class QuestionLikes
  attr_reader :id, :user_id, :question_id
  
  def self.likers_for_question_id(question_id)
    users = QuestionsDatabase.instance.execute(<<-SQL, question_id)
      SELECT
        *
      FROM
        users
      JOIN
        question_likes
      ON
        users.id = question_likes.user_id
      WHERE
        question_likes.question_id = ?
    SQL
    
    return nil unless users.length > 0
    users.map {|el| Users.new(el)}
  end
  
  def self.num_likes_for_question_id(question_id)
    likes = QuestionsDatabase.instance.execute(<<-SQL, question_id)
      SELECT
        COUNT(*)
      FROM
        question_likes
      WHERE
        question_likes.question_id = ?
    SQL
    
    return nil unless likes.length > 0
    likes.first["COUNT(*)"]
  end
  
  def self.liked_questions_for_user_id(user_id)
    questions = QuestionsDatabase.instance.execute(<<-SQL, user_id)
      SELECT
        *
      FROM
        questions
      JOIN
        question_likes
      ON
        questions.id = question_likes.question_id
      WHERE
        question_likes.user_id = ?
    SQL
    
    return nil unless questions.length > 0
    questions.map {|el| Questions.new(el)}
  end 
  
  def self.most_liked_questions(n)
    n = n - 1
    questions = QuestionsDatabase.instance.execute(<<-SQL, n)
      SELECT
        *
      FROM 
        questions 
      JOIN question_likes
        ON questions.id = question_likes.question_id
      GROUP BY 
        question_likes.question_id 
      ORDER BY 
        COUNT(user_id) DESC
      LIMIT 1 OFFSET ?
    SQL
    
    return nil unless questions.length > 0
    Questions.new(questions.first)
  end 
  
  def initialize(options)
    @id = options['id']
    @user_id = options['user_id']
    @question_id = options['question_id']
  end
  
  def create
    raise "#{self} already in database" if @id
  
    QuestionsDatabase.instance.execute(<<-SQL, @user_id, @question_id)
      INSERT INTO
        question_likes(user_id, question_id)
      VALUES
        (?, ?)
    SQL
    
    @id = QuestionsDatabase.instance.last_insert_row_id
  end
  
  
  
  
end


