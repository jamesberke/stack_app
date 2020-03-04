class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.integer :user_id, null: false
      t.integer :parent_id
      t.string :body
      t.integer :channel_id, null:false

      t.timestamps
    end
  end
end
