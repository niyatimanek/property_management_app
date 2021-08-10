class Property < ApplicationRecord
	belongs_to :user, :foreign_key => 'admin_id'
end
