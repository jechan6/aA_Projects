json.partial! "api/parties/parties", party: @party

json.guests @party.guests do |guest|
  json.name guest.name
  json.gifts guest.gifts, :title
end
