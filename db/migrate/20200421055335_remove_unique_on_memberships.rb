class RemoveUniqueOnMemberships < ActiveRecord::Migration[5.2]
  def change
    remove_index :memberships, [:user_id, :channel_id]
    add_index :memberships, [:user_id, :channel_id]
  end
end
