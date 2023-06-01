import React from 'react'
import { ErrorMessage, StyledFileUpload } from './FileUploader.styles'
import type { FileUploaderType } from './FileUploader.types'
import type { FieldValues } from 'react-hook-form'

export const FileUploader = <T extends FieldValues>({
  register,
  nameProperty,
  errors,
  watch,
  acceptFiles
}: FileUploaderType<T>) => {
  const file = watch(nameProperty)

  return (
    <StyledFileUpload>
      {file && file[0] && file[0].name ? `Файл загружен: ${file[0].name}` : 'Загрузите файл'}
      <input type="file" {...register(nameProperty)} accept={acceptFiles.join(', ')} />
      {errors[nameProperty]?.message && (
        <ErrorMessage>
          <>{errors[nameProperty]?.message}</>
        </ErrorMessage>
      )}
    </StyledFileUpload>
  )
}
