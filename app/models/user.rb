class User < ApplicationRecord
	validates :first_name, presence: true
	validates :last_name, presence: true
	validates :username, presence: true, uniqueness: { case_sensitive: true }
	validates :password, presence: true
	default_scope { where(:is_active => true) }
end
