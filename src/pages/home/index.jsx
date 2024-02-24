import React, { useState } from "react";
import Navbar from "../../components/navbar";

import {
  Container,
  Typography,
  TextField,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  Grid,
  Select,
  MenuItem,
  Paper,
} 
from "@mui/material";
import { useDropzone } from "react-dropzone";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const languageOptions = [
    { value: "ar", label: "Arabic" },
    { value: "bn", label: "Bengali" },
    { value: "bg", label: "Bulgarian" },
    { value: "zh", label: "Chinese simplified and traditional" },
    { value: "hr", label: "Croatian" },
    { value: "cs", label: "Czech" },
    { value: "da", label: "Danish" },
    { value: "nl", label: "Dutch" },
    { value: "en", label: "English" },
    { value: "et", label: "Estonian" },
    { value: "fi", label: "Finnish" },
    { value: "fr", label: "French" },
    { value: "de", label: "German" },
    { value: "el", label: "Greek" },
    { value: "iw", label: "Hebrew" },
    { value: "hi", label: "Hindi" },
    { value: "hu", label: "Hungarian" },
    { value: "id", label: "Indonesian" },
    { value: "it", label: "Italian" },
    { value: "ja", label: "Japanese" },
    { value: "ko", label: "Korean" },
    { value: "lv", label: "Latvian" },
    { value: "lt", label: "Lithuanian" },
    { value: "no", label: "Norwegian" },
    { value: "pl", label: "Polish" },
    { value: "pt", label: "Portuguese" },
    { value: "ro", label: "Romanian" },
    { value: "ru", label: "Russian" },
    { value: "sr", label: "Serbian" },
    { value: "sk", label: "Slovak" },
    { value: "sl", label: "Slovenian" },
    { value: "es", label: "Spanish" },
    { value: "sw", label: "Swahili" },
    { value: "sv", label: "Swedish" },
    { value: "th", label: "Thai" },
    { value: "tr", label: "Turkish" },
    { value: "uk", label: "Ukrainian" },
    { value: "vi", label: "Vietnamese" }
];

export default function Home() {
    const [pdfFile, setPdfFile] = useState(null);
    const [name, setName] = useState("");
    const [selectedFormat, setSelectedFormat] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState("");

    const onDrop = (acceptedFiles) => {
        setPdfFile(acceptedFiles[0]);
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: ".pdf",
        multiple: false
    });

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleFormatChange = (e) => {
        setSelectedFormat(e.target.value);
    };

    const handleLanguageChange = (e) => {
        setSelectedLanguage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("File:", pdfFile);
        console.log("Name:", name);
        console.log("Selected Format:", selectedFormat);
        console.log("Selected Language:", selectedLanguage);
    };

    return (
        <>
          <Navbar />
          <Container maxWidth="md" sx={{ margin: '20px auto', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Paper elevation={3} sx={{ padding: '20px', width: '100%', maxWidth: 600, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h4" component="h2" gutterBottom color="primary" sx={{ marginBottom: 3 }}>
                Translate Document
              </Typography>
              <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                <Grid container spacing={2} direction="column" alignItems="center" justifyContent="center">
                  
                  {/* Radio buttons for format selection */}
                  <Grid item xs={12}>
                    <FormControl component="fieldset">
                      <RadioGroup
                        row
                        aria-label="format"
                        name="format"
                        value={selectedFormat}
                        onChange={handleFormatChange}
                        sx={{ justifyContent: 'center' }}
                      >
                        <FormControlLabel value="pdf" control={<Radio />} label="PDF" sx={{ marginRight: 4 }} />
                        <FormControlLabel value="audio" control={<Radio />} label="Audio" />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
    
                  {/* Dropzone for file upload */}
                  <Grid item xs={12}>
                    <Button variant="outlined" startIcon={<CloudUploadIcon />} sx={{ cursor: 'pointer' }}>
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <Typography variant="body1" component="label" htmlFor="pdf-file">
                          {pdfFile ? `File: ${pdfFile.name}` : 'Drag and drop or click here to upload PDF'}
                        </Typography>
                      </div>
                    </Button>
                  </Grid>
    
                  {/* Text field for name input */}
                  <Grid item xs={12}>
                    <TextField
                      id="name"
                      type="text"
                      value={name}
                      onChange={handleNameChange}
                      fullWidth
                      label="Name (optional)"
                      variant="outlined"
                      sx={{ width: '100%' }} // Ensures full width
                    />
                  </Grid>
    
                  {/* Language selection dropdown */}
                  <Grid item xs={12}>
                    <FormControl fullWidth> {/* Ensures full width */}
                      <Select
                        id="language"
                        value={selectedLanguage}
                        onChange={handleLanguageChange}
                        displayEmpty
                        fullWidth
                        variant="outlined"
                        sx={{ width: '100%' }} // Ensures full width
                        >
                        <MenuItem value="" disabled>Select Language</MenuItem>
                        {languageOptions.map(option => (
                          <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
    
                  {/* Upload button */}
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" sx={{ width: '100%', marginTop: 2 }}>
                      Upload
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Container>
        </>
      );
}