import { ImageList, ImageListItem } from "@mui/material";


export const ImageGallery = ({images = []})=> {
  console.log(images)


  return (
    <ImageList sx={{ width: '100%', height: 450 }} cols={4} rowHeight={200}>
      {images.map((item, index) => (
        <ImageListItem key={index}>
          
          <img
            src={`${item}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={`Imagen ${index + 1} de la nota`}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
