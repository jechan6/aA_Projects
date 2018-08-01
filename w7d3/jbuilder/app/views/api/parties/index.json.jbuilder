json.array! @parties do |party|
  json.partial! "api/parties/parties", party: party
end
