class AddIndexToMemberships < ActiveRecord::Migration[5.2]
  def change
    add_index :memberships, [:user_id, :channel_id], unique: true
  end
end
