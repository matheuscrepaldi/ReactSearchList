import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import MovieIcon from '@material-ui/icons/Movie';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ReactHtmlParser from 'react-html-parser';

const styles = theme => ({
  card: {
    maxWidth: 300,
    width: 300,
    float:'left',
    marginTop: '10px',
    marginBottom: '10px',
    marginRight: '10px',
    marginLeft:' 10px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class SeriesCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="Card">  
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe">
              <IconButton aria-label="Add to Movies">
            <MovieIcon />
          </IconButton>
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={this.props.title}
          subheader={this.props.subheader}
        />
        <CardMedia
          className={classes.media}
          image={this.props.img}
          title={this.props.title}
        />
        <CardContent>
          <Typography component="p">
            Gênero: {this.props.genre}
          </Typography>
          <Typography component="p">
            Tipo: {this.props.type}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph> 
            { ReactHtmlParser(this.props.summary) }
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      </div>
    );
  }
}

SeriesCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SeriesCard);
