class CatRentalRequest < ApplicationRecord
  
  STATUS = %w(APPROVED DENIED PENDING)
  
  validates :cat_id, :start_date, :end_date, :status, presence: true
  validates :status, inclusion: { in: STATUS, message: "%(value) is not a valid status" }
  validate :does_not_overlap_approved_request
  
  belongs_to :cat,
  foreign_key: :cat_id,
  class_name: :Cat
  
  def overlapping_requests
    cat_requests = CatRentalRequest.where(cat_id: self.cat_id)
    requests = []
    if cat_requests
      cat_requests.each do |cat_request|
        start = cat_request.start_date
  
        finish = cat_request.end_date
        if self.start_date.between?(start,finish) || self.end_date.between?(start,finish)
          requests << cat_request
          # errors.add(:start_date) << " Invalid Cat request, cat is already requested"
        end 
      end 
    end 
    
    requests
    
  end
  
  def overlapping_pending_requests
    requests = overlapping_requests
    pending = []
    
    requests.each do |request|
      if request.status == 'PENDING'
        pending << request
      end
    end
    
    pending
    
  end
  
  def approve!
    pendings = overlapping_pending_requests
    self.status = 'APPROVED' 
    
    pendings.each do |pending|
      pending.deny!
    end 
    
    return self.save
  end
  
  def deny!
    self.status = 'DENIED'
    self.save
  end
  
  
  def overlapping_approved_requests
    requests = overlapping_requests
    approved = []
    
    requests.each do |request|
      if request.status == 'APPROVED'
        approved << request
      end
    end
    
    approved
  end
  
  def does_not_overlap_approved_request
    approved = overlapping_approved_requests
    
    approved.each do |approve|
      if approve.cat_id ==  self.cat_id
        errors.add(:start_date) << " Invalid Cat request, cat is already requested"
      end
    end
  end
  
  
end