class CreateGoalApps < ActiveRecord::Migration[5.1]
  def change
    create_table :goal_apps do |t|
      t.string :goal, null: false
      t.boolean :completed?, null: false
      t.integer :user_id, null: false
      t.boolean :public?, null: false
      t.timestamps
    end
    add_index :goal_apps, :user_id
  end
end
