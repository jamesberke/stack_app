# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  formal_name     :string
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    validates :username, :email, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: { minimum: 6} , allow_nil: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }

    after_initialize :ensure_session_token
    attr_reader :password

    # Through association for channels using memberships table
    has_many :channels,
        through: :memberships

    has_many :messages,
        foreign_key: :user_id,
        class_name: :Message

    has_many :memberships,
        foreign_key: :user_id,
        class_name: :Membership,
        dependant: :destroy

    has_many :started_channels,
        foreign_key: :admin_id,
        class_name: :Channel

    def self.find_by_credentials(email, password)
        @user = User.find_by(email: email)
        @user && @user.is_password?(password) ? @user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64(16)
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end

end
