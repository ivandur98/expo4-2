import React, { Component } from 'react';

import {
  Text,
  TouchableOpacity,
} from 'react-native';

import {
  Base,
  Default,
  Danger,
  Info,
  Success, 
  Big, Small, Ugly, Pink
} from './styles';

export default class Button extends Component {
  getTheme() {
    const { danger, info, success, big , small, ugly, pink} = this.props;

    if (info) {
      return Info;
    }

    if (success) {
      return Success;
    }

    if (ugly) {
      return Ugly;
    }
    if (pink) {
        return Pink;
      }
      if (danger) {
        return Danger;
      }
    if (big) {
        return Big;
    }
    if (small) {
        return Small;
    }
    return Default;
  }

  render() {
    const theme = this.getTheme();
    const {
      children,
      onPress,
      style,
      rounded,
    } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          Base.main,
          theme.main,
          rounded ? Base.rounded : null ,
          style,
        ]}
        onPress={onPress}>
        <Text style={[Base.label, theme.label]}>{children}</Text>
      </TouchableOpacity>
    );
  }
}