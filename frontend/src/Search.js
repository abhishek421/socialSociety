import { Avatar, Divider, FilledInput, IconButton, InputAdornment, List, ListItem, ListItemIcon, ListItemText, TextField } from "@material-ui/core";
import { Inbox, SearchRounded } from "@material-ui/icons";
import { Autocomplete } from "@material-ui/lab";
import { useState } from "react";
import { useHistory } from "react-router";
import {userData} from './userData'

function Search() {
    const { search } = window.location;
    const [searchQuery , setSearchQuery] = useState('');


    const filterData = (data, query) => {
      var newQuery = query.toLowerCase();
      if (!newQuery) {
          return [];
      }
  
      return data.filter((item) => {
          const itemName = item.userName.toLowerCase();
          return itemName.includes(newQuery);
      });
    };
    const filteredData = filterData(userData, searchQuery);
    

  function handleChange(e){
    e.preventDefault();
    setSearchQuery(e.target.value)
  }
  
  return (
        <div className='d-flex flex-column p-2'>
          <FilledInput

            value={searchQuery}
            placeholder="Search..."
            fullWidth
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                >
                  <SearchRounded />
                </IconButton>
              </InputAdornment>
            }
          />
          <Divider />
          <div>
            <List>
              {filteredData.map((item) => (
                    <ListItem button>
                      <ListItemIcon>
                        <Avatar src={item.user} />
                      </ListItemIcon>
                      <ListItemText primary={item.userName} />
                    </ListItem>
                ))}
            </List>
          </div>
        </div>
        );
}

export default Search;