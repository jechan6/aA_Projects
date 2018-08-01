json.array! @gifts do |gift|
  json.partial! "api/gifts/gifts", gift: gift

end
