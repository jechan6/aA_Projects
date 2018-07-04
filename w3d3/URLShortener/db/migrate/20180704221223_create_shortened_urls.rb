class CreateShortenedUrls < ActiveRecord::Migration[5.1]
  def change
    create_table :shortened_urls do |t|
      t.string :short_url
      t.string :long_url, presence = true
      t.integer :user_id, presence = true
    end
  end
end
