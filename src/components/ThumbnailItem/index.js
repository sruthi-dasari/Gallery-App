import './index.css'
import {Component} from 'react'

class ThumbnailItem extends Component {
  // const onThumbnailClick = () =>{
  //     changeGalleryImg()
  // }

  render() {
    const {imageContainer} = this.props
    const {
      imageUrl,
      thumbnailUrl,
      imageAltText,
      thumbnailAltText,
    } = imageContainer
    return (
      <li className="list-item">
        <button className="thumbnailBtn" onClick={this.onThumbnailClick}>
          <img
            src={thumbnailUrl}
            alt={thumbnailAltText}
            className="thumbnail-img"
          />
        </button>
      </li>
    )
  }
}

export default ThumbnailItem
