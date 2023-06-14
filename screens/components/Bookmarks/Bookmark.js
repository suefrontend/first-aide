import { View, Text, FlatList, StyleSheet, Modal, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import BookmarkItem from "./BookmarkItem";
import { authGet } from "../../helpers/authenticatedCalls";
import FocusBookmark from "./FocusBookmark";
import { FontFamily } from "../../../theme";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Bookmark(props) {
  const [allBookmarks, setAllBookmarks] = useState([]);
  const [focusBookmark, setFocusBookmark] = useState(null);
  const [clickBookmark, setClickBookmark] = useState(false); // Modal State

  useEffect(() => {
    const getBookmarks = async () => {
      try {
        const response = await authGet("/bookmarks/");
        setAllBookmarks(response.data);
        console.log(allBookmarks);
      } catch (error) {
        console.log(error);
      }
    };
    getBookmarks();
  }, [focusBookmark]);

  const popUpBookmark = (bookmarkInfo) => {
    const [id, instruction, title, users_id] = bookmarkInfo;
    setFocusBookmark([id, instruction, title, users_id]);
    setClickBookmark(true);
  };

  const cancelFocusBookmark = () => {
    setClickBookmark(false);
    setFocusBookmark(null);
    return;
  };

  return (
    <View className="flex-1 items-center justify-center">
      <LinearGradient
        colors={["#FE0944", "#FEAE96"]}
        style={styles.linearGradient}
      >
        <View style={[styles.wrapper, { borderColor: "rgba(255,255,255,0.2" }]}>
          <View style={styles.contentBox}>
            <Icon name="ellipsis-h" size={30} color="#fff" />
            <Text
              className="text-2xl font-bold text-white pt-4 pb-4"
              style={styles.headings}
            >
              Bookmarks
            </Text>

            <FlatList
              data={allBookmarks}
              keyExtractor={(allBookmarks) => allBookmarks.id}
              renderItem={({ item }) => (
                <BookmarkItem
                  {...item}
                  popUpBookmark={popUpBookmark}
                  cancelFocusBookmark={cancelFocusBookmark}
                />
              )}
            />
          </View>
        </View>
        {clickBookmark && (
          <Modal
            animationType="slide"
            transparent={true}
            visible={clickBookmark}
            onRequestClose={() => {
              setClickBookmark(false);
            }}
          >
            <FocusBookmark
              cancelFocusBookmark={cancelFocusBookmark}
              focusBookmark={focusBookmark}
            />
          </Modal>
        )}
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 50, // Margin from screen top
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  contentBox: {
    width: "100%",
    height: "100%",
  },
  linearGradient: {
    width: "100%",
    height: "100%",
  },
  headings: {
    fontFamily: FontFamily.poppinsSemibold,
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
