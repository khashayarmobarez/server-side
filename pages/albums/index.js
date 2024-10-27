

const Albums = ({albums}) => {

    // console.log(albums)

    return (
        <div>
            {
                albums.map( album => <p key={album.id} >{album.id} {album.title}</p>)
            }
        </div>
    );
};

export default Albums;

export async function getServerSideProps(context) {

    // req(request and response could be very useful)
    const { params, req, res } = context;
    
    console.log('generating albums page')
    // used serve-json db in this file
    const response = await fetch('https://localhost:3060/albums')
    const data = await response.json()
    
    return {    
        props: {
            albums: data
        }
    }
}