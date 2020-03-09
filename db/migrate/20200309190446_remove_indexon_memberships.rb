class RemoveIndexonMemberships < ActiveRecord::Migration[5.2]
  def change
    remove_index :memberships, :user_id
    remove_index :memberships, :channel_id
  end
end
