import { Component } from 'vue';
import { IFilters } from '@/registers/properties';

declare module 'vue' {
  interface ComponentCustomProperties extends Component {
    $filters: IFilters;
  }
}