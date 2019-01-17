var recipes = { 
  mayo: '2/3 cups', 
  garlic: '2',
  lemon: '1 ts',
  salt: '1/4 ts'
}

function updateObjectWithKeyAndValue(object,key,value) {
  object[key] = 'value'
  return object
}

console.log(recipes)

updateObjectWithKeyAndValue(recipes, 'water', '2 ts')

console.log(recipes)