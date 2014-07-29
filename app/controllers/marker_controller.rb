class MarkerController < ApplicationController
  def index
    @markers = Marker.all
  end

  def new
    @marker = Marker.new
  end

  def create
    @marker = Marker.new address: params[:address]
    if @marker.save
      # render :index
      redirect_to root_path
    else
      render :index, notice: "Error in saving marker"
    end


  end

end
