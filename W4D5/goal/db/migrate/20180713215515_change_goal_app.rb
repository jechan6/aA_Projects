class ChangeGoalApp < ActiveRecord::Migration[5.1]
  def change
    change_column :goal_apps, :completed?, :boolean, default: false
    change_column :goal_apps, :public?, :boolean, default: true

  end
end
