function addTemplate (data) {
  return `

    <div class="add">
      <h3>Add Image</h3>
      <form>
        <label>Upload Photo: <input type="file" class="image"</label><br>
      </form>
      <button class="save-button" data-to>Save</button>
    </div>

  `;
}

export default addTemplate;