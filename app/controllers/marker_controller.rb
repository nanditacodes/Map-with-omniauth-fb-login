class MarkerController < ApplicationController
  def index
    @markers = Marker.all
  end

  def new
    @marker = Marker.new
  end

  def create
    @marker = Marker.new address: params[:address]
    @marker.save
  end

end
