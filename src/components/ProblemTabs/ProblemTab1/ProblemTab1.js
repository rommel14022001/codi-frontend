import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, TextareaAutosize, MenuItem, Box } from "@material-ui/core";

import "../../../styles/screens/ProblemFormScreen/ProblemTabs/ProblemTab1/ProblemTab1.scss";
import Context from "../../../helpers/context/context";
import k from "../../../helpers/constants/constants";
import CodeEditor from "../../CodeEditor/CodeEditor";
import colors from "../../../config/colors/colors";
import InputLabel from "@material-ui/core/InputLabel";

export default function ProblemTab1() {
    const classes = useStyles();
    const { codeSolution, setCodeSolution, problemInfo, setProblemInfo } =
        useContext(Context);

    var languageCode = "text/x-java";

    const onChange = (e) => {
        if (!e.target) return;
        setProblemInfo({
            ...problemInfo,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className={classes.root}>
            <div>
                <div id="TextFieldBox">
                    <TextField
                        color="white"
                        label="Titulo"
                        id="TitleField"
                        className={`
              ${classes.whiteTheme} 
              ${classes.LabelTitleForm} 
              ${classes.textField}
            `}
                        name="name"
                        onChange={onChange}
                        value={problemInfo.name}
                    />
                    <TextField
                        id="SelectField"
                        select
                        label="Dificultad"
                        className={`
              ${classes.whiteTheme} 
              ${classes.LabelDifficultyForm} 
              ${classes.textField} 
              ${classes.whiteThemeIconSelect}
            `}
                        onChange={onChange}
                        name="difficulty"
                        value={problemInfo.difficulty}
                    >
                        {k.difficultiesDropdown.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div id="TextAreaLgBox">
                    <div id="InputLabelDescriptionBox">
                        <InputLabel
                            id="InputLabelDescription"
                            style={{
                                color: "white",
                                marginBottom: "1rem",
                                textAlign: "start",
                                fontWeight: "bold",
                            }}
                            htmlFor="description"
                        >
                            Descripcion
                        </InputLabel>
                    </div>
                    <TextareaAutosize
                        id="TextAreaLg"
                        className={classes.TextareaAutosizeLg}
                        aria-label="Problem Description"
                        rowsMin={8}
                        placeholder="Descripcion del Problema"
                        name="description"
                        onChange={onChange}
                        value={problemInfo.description}
                    />
                </div>
                <div
                    style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "82%",
                    }}
                    id="TextAreaBox"
                >
                    <div id="InputLabelSolutionBox">
                        <InputLabel
                            id="InputLabelSolution"
                            style={{
                                color: "white",
                                textAlign: "start",
                                fontWeight: "bold",
                            }}
                            htmlFor="solution"
                        >
                            Solucion
                        </InputLabel>
                    </div>
                    <TextareaAutosize
                        className={`${classes.TextareaAutosizeLg} TextArea`}
                        aria-label="Problem Solution"
                        rowsMin={8}
                        placeholder="Solucion del Problema"
                        helperText="Solucion"
                        name="solution"
                        onChange={onChange}
                        value={problemInfo.solution}
                        autoComplete="false"
                    />
                    <div id="CodeEditorBox">
                        <InputLabel
                            id="InputLabelSolutionCode"
                            style={{
                                color: "white",
                                marginBottom: "1rem",
                                textAlign: "start",
                                fontWeight: "bold",
                            }}
                            htmlFor="solutionCode"
                        >
                            Codigo Solucion
                        </InputLabel>
                        <Box className={classes.codeEditor}>
                            <CodeEditor
                                id="CodeEditor"
                                className="CodeEditorBox"
                                name="solutionCode"
                                value={codeSolution}
                                language={languageCode}
                                onChange={setCodeSolution}
                            />
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        color: "white",
    },
    textField: {
        color: "blue",
        "@media (min-width: 426px) and (max-width:515px)": {
            marginBottom: "30px",
        },
        marginLeft: "2%",
    },

    LabelTitleForm: {
        "& .MuiFormLabel-root": {
            fontWeight: "bold",
            "@media (min-width:320px) and (max-width:426px)": {
                marginTop: "7%",
            },
            "@media (min-width:426px) and (max-width:768px)": {
                marginTop: "0%",
            },
            "@media (min-width: 768px) and (max-width:1441px) ": {
                marginTop: "0%",
            },
        },
    },

    LabelDifficultyForm: {
        "& .MuiFormLabel-root": {
            fontWeight: "bold",
            marginTop: "10%",
            "@media (min-width: 426px) and (max-width:768px)": {
                marginTop: "0%",
            },
            "@media (min-width: 768px) and (max-width:1445px)": {
                marginTop: "0%",
            },
            "@media (min-width: 1445px) and (max-width:1800px)": {
                marginTop: "0%",
            },
            "@media (min-width: 1800px) and (max-width:2250px)": {
                marginTop: "0%",
            },
            "@media (min-width: 2250px)": {
                marginTop: "0%",
            },
        },
    },
    whiteTheme: {
        "& .MuiSelect-icon": {
            color: "white",
            height: "80%",
        },

        "& .MuiInputLabel-formControl": {
            color: "white",
        },
        "& .MuiInputBase-root ": {
            color: colors.white,
        },
        "& .MuiInputBase-input .MuiInput-input": {
            color: colors.white,
        },
        "& .MuiInput-underline:before": {
            borderColor: colors.white,
            borderWidth: "0.2rem",
            borderBottom: "0.2rem solid white",
        },
        "& .MuiInput-underline:after": {
            borderColor: colors.white,
            borderWidth: "0.2rem",
            borderBottom: "0.2rem solid white",
        },
    },

    TextareaAutosizeLg: {
        borderColor: "white",
        resize: "none",
    },
    codeEditor: {
        width: "100%",
        height: '300px'
    },
}));
