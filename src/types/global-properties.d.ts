import { Component } from 'vue';
import { IFilters } from '@/types/filters';

declare module 'vue' {
  interface ComponentCustomProperties extends Component {
    $filters: IFilters;
  }
}