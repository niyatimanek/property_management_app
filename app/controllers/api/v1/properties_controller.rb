class Api::V1::PropertiesController < ApplicationController
  def index
    # properties = Property.all.order(created_at: :desc)
    properties = properties = Property.all.order(created_at: :desc).includes(:user).as_json(include: { user: { only: [:first_name, :last_name] } })
    render json: properties
  end

  def create
    property = Property.new(property_params)
    if property.save
      render json: property
    else
      render json: { message: "Validation failed", errors: property.errors }, status: 400
    end
  end

  def show
    if property
      render json: property
    else
      render json: property.errors
    end
  end

  def update
    if property.update(property_params)
      render json: property
    else
      render json: { message: "Validation failed", errors: property.errors }, status: 400
    end
  end

  def destroy
  end

  def deactivate
    property.update_columns(is_active: false)
    render json: {message: 'Property Deactivated'}
  end

  private

  def property_params
    params.permit(:name, :address, :city, :state, :zipcode, :country, :is_approved, :admin_id)
  end

  def property
    @property ||= Property.find(params[:id]) 
  end 
end
