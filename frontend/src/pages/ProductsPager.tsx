import { Container, Typography, Box, Button } from '@mui/material';

const ProductsPager = () => {
    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 4 }}>
                Товари
            </Typography>

            <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: '8px', maxWidth: '300px' }}>
                
                <img 
                    src="https://content.rozetka.com.ua/goods/images/big/632055936.jpg" 
                    alt="Товар" 
                    style={{ width: '100%', borderRadius: '4px' }} 
                />
                
    
                <Box sx={{ my: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Форма для випікання в аерогрилі</Typography>
                    <Typography variant="body2" color="text.secondary"> Це не просто аксесуар, це - щоденна турбота про ваш комфорт, здоров'я та смак страв.</Typography>
                </Box>

           
                <Button fullWidth sx={{
                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                    borderRadius: '8px',
                    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                    color: 'white',
                    height: 40,
                    textTransform: 'none'
                }}>
                    Купити
                </Button>
            </Box>
        </Container>
    );
};

export default ProductsPager;


