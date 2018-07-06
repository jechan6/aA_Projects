# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:

#   movies = Movie.create( name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Poll.destroy_all
Question.destroy_all
AnswerChoice.destroy_all
Response.destroy_all


user1 = User.create(username: 'jeff')
user2 = User.create(username: 'tony')
user3 = User.create(username: 'bob')



poll = Poll.create(user_id: user1.id, title: 'We Welcome your input')
poll2 = Poll.create(user_id: user2.id, title: 'Favorite Movie of all time')


question = Question.create(question: 'What is your favorite hobby', poll_id: poll.id)
question2 = Question.create(question: 'What is your favorite movie of all time?', poll_id: poll2.id)


ac2 = AnswerChoice.create(answer_choice: 'basketball', question_id: question.id)
ac3 = AnswerChoice.create(answer_choice: 'Jurassic Park', question_id: question2.id)
ac4 = AnswerChoice.create(answer_choice: 'Lion King', question_id: question2.id)

Response.create(answer_choice_id: ac2.id, user_id: user1.id)
Response.create(answer_choice_id: ac3.id, user_id: user2.id)
Response.create(answer_choice_id: ac4.id, user_id: user3.id)