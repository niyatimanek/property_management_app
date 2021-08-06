class Api::V1::UsersController < ApplicationController
  def index
    users = User.all.order(created_at: :desc)
    render json: users
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: user
    else
      render json: { message: "Validation failed", errors: user.errors }, status: 400
    end
  end

  def show
  end

  def destroy
  end

  private

  def user_params
    params.permit(:first_name, :last_name, :username, :password, :role)
  end
end
