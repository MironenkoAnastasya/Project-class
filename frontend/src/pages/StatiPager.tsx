import { Container, Typography, Box } from '@mui/material';

const StatiPager = () => {
    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: '#2e7d32', mb: 4 }}>
                Статті
            </Typography>

            <Box sx={{ maxWidth: '500px', mb: 4 }}>
                
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLlDYUYRw4PqkZo_MzdKQGBciQ7ugUaTHs3A&s" 
                    alt="Корисний смузі" 
                    style={{ width: '100%', borderRadius: '12px', display: 'block' }} 
                />
                

                <Box sx={{ mt: 2 }}>
                    <Typography variant="h5" component="h2" sx={{ fontWeight: '600', mb: 1, color: '#388e3c' }}>
                        Чим корисні смузі для здоров'я?
                    </Typography>
                    
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: '1.6' }}>
                        Смузі - це справжній вітамінний заряд для організму! Вони допомагають швидко отримати денну норму клітковини, 
                        покращують травлення та дарують енергію на весь день. Головне - додавати більше зелені, ягід та не зловживати цукром.
                    </Typography>
                </Box>

            </Box>
        </Container>
    );
};

export default StatiPager;