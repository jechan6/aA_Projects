class CreateSubsPost < ActiveRecord::Migration[5.1]
  def change
    create_table :subs_posts do |t|
      t.integer :post_id, null: false
      t.integer :sub_id, null: false
      t.timestamps
    end
  end
end
