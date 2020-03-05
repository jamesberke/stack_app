# == Schema Information
#
# Table name: messages
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  parent_id  :integer
#  body       :string
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Message < ApplicationRecord
    validates :user_id, :channel_id, presence: true

    has_one :thread,
        foreign_key: :parent_id,
        class_name: :Message

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :channel,
        foreign_key: :channel_id,
        class_name: :Channel

    belongs_to :parent_message,
        foreign_key: :parent_id,
        class_name: :Message
end
