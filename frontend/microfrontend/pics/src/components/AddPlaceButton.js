function AddPlaceButton({buttonClassName}) {
  const handleButtonClick = () => {
    alert('Click!');
  }

  return (
    <button
      className={buttonClassName}
      type="button"
      onClick={handleButtonClick}>
    </button>
  )
}

export default AddPlaceButton