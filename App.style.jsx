import { StyleSheet } from 'react-native';



export default StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
    height: "100%",
    paddingTop: 20,
    paddingBottom: 20,
  },
  logoContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 20,
    width: "100%",
    height: "20%",
    maxHeight: 128,
  },
  formContainer: {
    flex: 1,
    paddingLeft: 40,
    paddingRight: 40,
    width: "100%",
    height: "70%",
    maxHeight: "70%",
  },
  scrollFormContainer: {
    flex: 1,
    paddingLeft: 40,
    paddingRight: 40,
    width: "100%",
    height: "70%",
  },
  selectContainer: {
    flex: 1,
    width: "100%",
    height: "80%",
    maxHeight: "80%",
  },
  labelContainer: {
    paddingBottom: 2,
    paddingLeft: 4,
  },
  verifyContainer: {
    width: "100%",
    paddingBottom: 12,
  },
  selectPadding: {
    width: "100%",
    paddingLeft: 40,
    paddingRight: 40,
  },
  selectImageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    maxWidth: "40%",
  },
  logo: {
    width: 50,
    height: 50,
  },
  selectImage: {
    width: 35,
    height: 132,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 14,
    paddingTop: 10,
  },
  swapText: {
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
  },
  signUpText: {
    fontSize: 14,
    color: "#FFFFFF",
  },
  label: {
    fontSize: 16,
    fontWeight: 5,
  },
  termsText: {
    color: "#3b9f79",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#000000",
  },
  inputFocused: {
    borderBottomWidth: 1,
    borderColor: "#3b9f79",
  },
  submitBtn: {
    width: 100,
    backgroundColor: "#3b9f79",
  },
  submitBtnCustom: {
    width: 100,
    backgroundColor: "#3b9f79",
    marginTop: 0,
  },
  signUpBtn: {
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#bfbfbf",
  },
  selectBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  addBtn: {
    borderWidth: 1,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    width: "100%",
    backgroundColor: "#3b9f79",
    borderColor: "#3b9f79",
  },
  selectBtnSelected: {
    backgroundColor: "#eaf6ed",
  },
  phoneInput: {
    borderBottomWidth: 1,
    width: "100%",
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: 9,
    marginBottom: 26,
    marginLeft: 8,
},
  codeFieldRoot: {
    marginTop: 20
  },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderBottomWidth: 1,
    borderColor: '#00000030',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#3b9f79',
  },
});