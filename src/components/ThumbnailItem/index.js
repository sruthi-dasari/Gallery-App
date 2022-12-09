import './index.css'
import {Component} from 'react'

class ThumbnailItem extends Component {
  onThumbnailClick = () => {
    const {imageContainer, updateActiveImgId} = this.props
    const {id} = imageContainer
    updateActiveImgId(id)
  }

  render() {
    const {imageContainer, activeImgId, isActive} = this.props
    const {thumbnailUrl, thumbnailAltText} = imageContainer
    const activeThumbnailClassName = isActive ? 'active-thumbnail-img' : ''
    return (
      <li className="list-item">
        <button
          type="button"
          className="thumbnailBtn"
          onClick={this.onThumbnailClick}
        >
          <img
            src={thumbnailUrl}
            alt={thumbnailAltText}
            className={`thumbnail-img ${activeThumbnailClassName}`}
          />
        </button>
      </li>
    )
  }
}

export default ThumbnailItem
