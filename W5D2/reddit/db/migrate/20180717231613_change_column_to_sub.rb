class ChangeColumnToSub < ActiveRecord::Migration[5.1]
  def change
    remove_index :subs, :moderator_id
  end
end
