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
    validates :name, presence: true
    validates :admin_id, presence: true
    validates :is_dm, :is_private, inclusion: { in: [true, false] }
    
    belongs_to :admin,
    foreign_key: :admin_id,
    class_name: :User
    
    has_many :memberships,
    foreign_key: :channel_id,
    class_name: :Membership
    
    has_many :messages,
    foreign_key: :channel_id,
    class_name: :Message
    
    # Through association for users using memberships table
    has_many :users,
        through: :memberships,
        source: :user

end
