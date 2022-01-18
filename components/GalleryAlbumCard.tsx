import Image from "next/image"
import Link from "next/link"
import styles from '../styles/components/GalleryAlbumCard.module.scss'

const GalleryAlbum = ({album}: any) => {
    return(
        <Link as={`/gallery/albums/${album.id}`} href="/gallery/albums/[albumID]"><a>
            <div className={styles.album_card}>
                <div className={styles.cover_image}>
                    <Image src={album.images[0].src} alt={album.title} placeholder={"blur"}/>
                </div>
                <div className={styles.title}>
                    <h2>{album.title}</h2>
                    <p>{album.description}</p>
                </div>
            </div>
        </a></Link>
    )
}

export default GalleryAlbum