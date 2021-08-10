class Api::V1::PropertiesController < ApplicationController
  def index
    properties = Property.all.order(created_at: :desc)
    render json: properties
  end

  def create
    property = Property.new(property_params)
    binding.pry
    if property.save
      render json: property
    else
      render json: { message: "Validation failed", errors: property.errors }, status: 400
    end
  end

  def show
  end

  def destroy
  end

  private

  def property_params
    params.permit(:name, :address, :city, :state, :zipcode, :country, :admin_id)
  end
end
