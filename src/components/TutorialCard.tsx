
import { Card, CardContent, Typography, Button } from '@mui/material';
import Link from 'next/link';

interface TutorialCardProps {
  tutorial: { id: number; title: string; videoSrc: string; };
}

const TutorialCard = ({ tutorial }: TutorialCardProps) => (
  <Card>
    <CardContent>
      <Typography variant="h5">{tutorial.title}</Typography>
      <Link href={`/tutoriales/${tutorial.id}`}>
      <Button
        
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
      >
        Ver Tutorial
      </Button>
      </Link>
    </CardContent>
  </Card>
);

export default TutorialCard;
