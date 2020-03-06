class ChangeChannelsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :channels, :is_dm
    remove_column :channels, :is_private
    add_column :channels, :is_dm, :boolean, null: false, deafult: false
    add_column :channels, :is_private, :boolean, null: false, deafult: false
  end
end
