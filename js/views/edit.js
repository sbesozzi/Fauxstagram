function editTemplate (data) {
  return `

    <div class="edit">
      <h3>Edit Image</h3>
      <form>
        <label>Edit Photo: <input type="file" class="edit-image"</label><br>
      </form>
      <button class="edit-button" data-to>Edit</button>
    </div>

  `;
}

export default editTemplate;