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
} from "@mui/material";
import { useDropzone } from "react-dropzone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";

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
  { value: "vi", label: "Vietnamese" },
];

export default function Home() {
  const [pdfFile, setPdfFile] = useState(null);
  const [selectedFormat, setSelectedFormat] = useState("pdf"); // Default to PDF
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedAuthorname, setSelectedAuthorname] = useState("");
  const [selectedBookname, setSelectedBookname] = useState("");
  const [selectedPublisheddate, setSelectedPublisheddate] = useState("");

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file.type === "application/pdf") {
      setPdfFile(file);
    } else {
      alert("Please upload a PDF file.");
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ".pdf",
    multiple: false,
  });

  const handleFormatChange = (e) => {
    setSelectedFormat(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!pdfFile) {
      alert("Please upload a PDF file.");
      return;
    }

    const formData = new FormData();
    formData.append("uploaded", pdfFile); // Update key to 'uploaded'
    formData.append("name", selectedAuthorname);
    formData.append("language", selectedLanguage);
    formData.append("type", selectedFormat);
    formData.append("author_name", selectedAuthorname);
    formData.append("book_name", selectedBookname);
    formData.append("published_date", selectedPublisheddate);
    formData.append("user", 1);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000",
        formData
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Navbar />
      <Container
        maxWidth="md"
        sx={{
          margin: "20px auto",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: "20px",
            width: "100%",
            maxWidth: 600,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            color="primary"
            sx={{ marginBottom: 3 }}
          >
            Translate Document
          </Typography>
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <Grid
              container
              spacing={2}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <RadioGroup
                    row
                    aria-label="format"
                    name="format"
                    value={selectedFormat}
                    onChange={handleFormatChange}
                    sx={{ justifyContent: "center" }}
                  >
                    <FormControlLabel
                      value="pdf"
                      control={<Radio />}
                      label="PDF"
                      sx={{ marginRight: 4 }}
                    />
                    <FormControlLabel
                      value="audio"
                      control={<Radio />}
                      label="Audio"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <label htmlFor="pdf-file">
                  <Button
                    variant="outlined"
                    startIcon={<CloudUploadIcon />}
                    component="span"
                    sx={{ cursor: "pointer" }}
                  >
                    {pdfFile
                      ? `File: ${pdfFile.name}`
                      : "Drag and drop or click here to upload PDF"}
                  </Button>
                </label>
                <input
                  {...getInputProps()}
                  id="pdf-file"
                  style={{ display: "none" }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="author-name"
                  type="text"
                  value={selectedAuthorname}
                  onChange={(e) => setSelectedAuthorname(e.target.value)}
                  fullWidth
                  label="Author Name"
                  variant="outlined"
                  sx={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="book-name"
                  type="text"
                  value={selectedBookname}
                  onChange={(e) => setSelectedBookname(e.target.value)}
                  fullWidth
                  label="Book name:"
                  variant="outlined"
                  sx={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="published-date"
                  type="text"
                  value={selectedPublisheddate}
                  onChange={(e) => setSelectedPublisheddate(e.target.value)}
                  fullWidth
                  label="Published date:"
                  variant="outlined"
                  sx={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <Select
                    id="language"
                    value={selectedLanguage}
                    onChange={handleLanguageChange}
                    displayEmpty
                    fullWidth
                    variant="outlined"
                    sx={{ width: "100%" }}
                  >
                    <MenuItem value="" disabled>
                      Select Language
                    </MenuItem>
                    {languageOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ width: "100%", marginTop: 2 }}
                >
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
