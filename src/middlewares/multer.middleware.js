import multer from "multer";
const storage = multer.diskStorage({
  destination: function (req, file, callBack) {
    callBack(null, "./public/uploads");
  },
  filename: function (req, file, callBack) {
    callBack(null, file.originalname);
  },
});

export const upload = multer({
  storage,
});


