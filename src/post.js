import * as React from 'react';
import { useState } from 'react';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
// import { Card } from '@mui/material';
import './App.css';
import { Checkbox, Select, MenuItem } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Post(props) {
    const [data, setdata] = useState({
        one: '',
        two: '',
        three: '',
        four: '',
        five: '',
        six: '',
        seven: '',
        eight: '',
        nine: '',
        ten: '',
        bang: '',
        saw: '',
        see: '',
        seen: '',
        mass: '',
        zoo: '',
        so: ''
    })
    const [love, setlove] = useState('');
    // const Post=e=>{
    //     const hike=e.target.value;
    //     setlove(hike);
    // }
    const { one, two, three, four, five, six, seven, eight, nine, ten, bang, saw, see, seen, so } = data;
    const Post = e => {
        setdata({ ...data, [e.target.name]: e.target.value });
        const hike = e.target.value;
        setlove(hike);
    }
    const Hello = e => {
        e.preventDefault();

        setdata({
            one: '',
            two: '',
            three: '',
            four: '',
            five: '',
            six: '',
            seven: '',
            eight: '',
            nine: '',
            ten: '',
            bang: '',
            saw: '',
            see: '',
            seen: '',
            mass: '',
            zoo: '',
            so: ''
        })
    }


    return (
        <div >
            <Grid container>



                <Box
                    sx={{
                        boxShadow: 6,
                        width: '45rem',
                        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                        color: (theme) =>
                            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                        p: 1,
                        m: 1,
                        borderRadius: 2,
                        fontSize: '0.875rem',
                        fontWeight: '700',
                        marginLeft: '17rem'
                    }}
                >
                    <form onSubmit={Hello} className="side">
                        <h1 className='header'>Job Posting Form</h1>
                        <div>
                            <TextField
                                required
                                name='one'
                                value={one}
                                placeholder='Enter Name/Organization'
                                type={'text'}
                                onChange={Post}
                            />
                        </div><br />
                        <div>
                            <div >
                                <label><b>JOB Title</b></label>
                                {love === 70 &&
                                    (
                                        <div style={{ position: 'relative' }}>
                                            <TextField placeholder='Enter job category ' name="zoo" />
                                        </div>

                                    )
                                }
                                <Select labelId="demo-simple-select-label" id="demo-simple-select"
                                    value={two} name="two" onChange={Post}
                                >
                                    <MenuItem value={0}>---None---</MenuItem>
                                    <MenuItem value={10}>Baby Sitter</MenuItem>
                                    <MenuItem value={20}>Gardener</MenuItem>
                                    <MenuItem value={30}>Pizza Delivery</MenuItem>
                                    <MenuItem value={40}>Coffee Day Waiter</MenuItem>
                                    <MenuItem value={50}>Type Writer</MenuItem>
                                    <MenuItem value={60}>Online Tutions</MenuItem>
                                    <MenuItem value={70}>None of Above</MenuItem>
                                </Select>

                            </div>

                            <div >
                                <div>
                                    <label><b>Job Description</b></label>
                                </div>
                                <textarea value={three} name="three" onChange={Post} />
                            </div>
                            <div>
                                <label ><b>Payment</b></label>
                                <div>
                                    <FormControlLabel control={<Checkbox />} label="Cash Payment" style={{ marginLeft: "3%" }} name="saw" value={saw} onChange={Post} /> <br />
                                    <FormControlLabel control={<Checkbox />} label="Net Banking" style={{ marginLeft: "3%" }} name="see" value={see} onChange={Post} /> <br />
                                    <FormControlLabel control={<Checkbox />} label="Cheque Payment" style={{ marginLeft: "3%" }} name="seen" value={seen} onChange={Post} /> <br />
                                    <FormControlLabel control={<Checkbox />} label="Cash App / Zelle / PayPal" style={{ marginLeft: "3%" }} name="so" value={so} onChange={Post} /> <br />
                                </div>
                            </div>
                            <div className='signin'>
                                <label><b>Time Period</b></label>
                                <div>
                                    <TextField
                                        required
                                        value={four} name="four" onChange={Post}
                                        placeholder='State'
                                        type={'date'}
                                    />
                                    <TextField
                                        required
                                        value={five} name="five" onChange={Post}
                                        placeholder='State'
                                        type={'date'}
                                    />

                                </div>
                            </div>
                            <div >
                                <div>
                                    <label><b>Work Timings</b></label>
                                </div>
                                <TextField
                                    required
                                    value={six} name="six" onChange={Post}
                                />
                            </div>
                            <div >
                                <div>
                                    <label><b>Job Location</b></label>
                                </div>
                                <TextField
                                    required
                                    value={seven} name="seven" onChange={Post}
                                    placeholder='State'

                                />
                                <TextField
                                    required
                                    id="outlined-password-input"
                                    placeholder='city'
                                    value={eight} name="eight" onChange={Post}

                                />
                                <TextField
                                    required
                                    id="outlined-password-input"
                                    placeholder='Zip code'
                                    value={nine} name="nine" onChange={Post}
                                    type={'number'}
                                />
                            </div>
                            <div>
                                <div>
                                    <label><b>Contact Details</b></label>
                                </div>
                                <textarea value={ten} name="ten" onChange={Post} />
                            </div>
                            <div>
                                <Checkbox {...label} value={bang} name="bang" onChange={Post} /> I accept TERMS & CONDITIONS

                            </div>
                            <div className='btn'>
                                <Button variant="contained" type={'submit'}>Post Job</Button>
                            </div>
                        </div>
                    </form>

                </Box>
            </Grid>





        </div>
    );
}

export default Post;


