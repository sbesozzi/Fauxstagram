function processData(data) {
  console.log(data);
  return data.map(function(item) {
    return`
      <li class="image-list-item" data-image-id="${item.objectId}">
      </li>
      `;

  }).join('');
}

function imagesTemplate(data) {
  console.log('images template');
  return `
    <div class="images-list">               
      <ul>${processData(data)}</ul>
    </div>

  `;
}

export default imagesTemplate;