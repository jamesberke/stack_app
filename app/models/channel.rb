# == Schema Information
#
# Table name: channels
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :string
#  admin_id    :integer          not null
#  is_dm       :boolean          not null
#  is_private  :boolean          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Channel < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :admin_id, presence: true
    validates :is_dm, :is_private, inclusion: { in: [:true, :false] }

    # has_many :messages
    # belongs_to :admin
end
