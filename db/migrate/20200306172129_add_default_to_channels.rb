class AddDefaultToChannels < ActiveRecord::Migration[5.2]
  def change
    change_column_default :channels, :is_dm, false
    change_column_default :channels, :is_private, false
  end
end
