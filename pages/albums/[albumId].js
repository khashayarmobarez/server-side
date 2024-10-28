

const AlbumDetails = ({album}) => {
    return (
        <div>
            <h1>album details</h1>
            <p>{album.title}</p>
            <p>{album.id}</p> 
        </div>
    );
};

export default AlbumDetails;

export async function getServerSideProps(context) {
    const { params } = context
    const res = await fetch(`http://localhost:3060/albums/${params.albumId}`)
    const data = await res.json();

    return {
        props: {album: data}
    }
} 